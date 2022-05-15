import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';
// Models
import { productsColumns } from 'src/app/core/constants/product.constants';
import { Customer } from 'src/app/core/models/customer/customer.model';
import { InitialMethods } from 'src/app/core/models/interfaces/initial-method.interface';
import {
  ProductWithPrice,
  ProductWithPriceWithCount,
} from 'src/app/core/models/product/product.model';
import { ColumnsInterface } from 'src/app/core/models/interfaces/table.interface';
import { InvoicePayloadInterface } from 'src/app/core/models/interfaces/invoice-api.interface';
// Service
import { CustomerService } from 'src/app/core/services/customer.service';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import { ProductService } from 'src/app/core/services/product.service';
import { TitleService } from 'src/app/core/services/title.service';
import {
  Invoice,
  InvoiceWithDetail,
} from 'src/app/core/models/invoice/invoice.models';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css'],
})
export class CreateInvoiceComponent implements OnInit, InitialMethods {
  public productsColumns: ColumnsInterface[] = productsColumns;
  public customers: Customer[] = [];
  public productsWithPrice: ProductWithPrice[] = [];
  public createInvoiceFormGroup = new FormGroup({});
  public consecutiveRoute: string = '';
  public isLoading: boolean = false;
  public products: ProductWithPriceWithCount[] = [];
  public idInvoice!: number;

  constructor(
    private titleService: TitleService,
    private customerService: CustomerService,
    private invoiceService: InvoiceService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.consecutiveRoute =
      this.route.snapshot.paramMap.get('consecutive') ?? '';
  }

  get isValid() {
    return this.createInvoiceFormGroup.invalid || !this.products.length;
  }

  ngOnInit(): void {
    this.initialSettingComponent();
    this.initialSubscription();
    this.loadInitialData();
  }

  initialSubscription(): void {}

  initialSettingComponent() {
    this.settingTitle(this.isEditing());
    this.settingFormCreateInoice();
  }

  loadInitialData() {
    if (this.isEditing()) {
      this.getInvoiceByConsecutive();
    }
    this.getAllCustomers();
    this.getAllProductsWithPrice();
    this.getConsecutive();
  }

  settingTitle(isEdit?: boolean) {
    this.titleService.emmitTitle({
      title: !isEdit ? 'Crear factura' : 'Editar factura',
      description: !isEdit ? 'Crea tu factura!' : 'Edita tu factura',
    });
  }

  private async getAllCustomers() {
    this.customers = await this.customerService.getAllCustomers();
  }

  private async getAllProductsWithPrice() {
    this.productsWithPrice = await this.productService.getProrductWithPrice();
  }

  private async getConsecutive() {
    if (!this.isEditing()) {
      const consecutive = await this.invoiceService.getConsecutive();
      this.createInvoiceFormGroup.get('consecutive')?.setValue(consecutive);
    } else {
      this.createInvoiceFormGroup
        .get('consecutive')
        ?.setValue(this.consecutiveRoute);
    }
  }

  private async getInvoiceByConsecutive() {
    this.loadingService.emitLoading(true);
    try {
      const selectedInvoice = await this.invoiceService.getInvoiceByConsecutive(
        this.consecutiveRoute
      );
      this.idInvoice = selectedInvoice.id;
      this.settingFormCreateInoice(selectedInvoice);
    } catch (error) {
      this.redirectToInvoice();
    } finally {
      this.loadingService.emitLoading(false);
    }
  }

  async saveInvoice() {
    const valueFormGroup = this.createInvoiceFormGroup.value;
    try {
      const payload: InvoicePayloadInterface = {
        idCustomer: valueFormGroup.idCustomer,
        consecutive: valueFormGroup.consecutive,
        datePurchase: `${format(new Date(), 'yyyy-MM-dd')}T00:00:00`,
        products: this.products.map(
          (p: ProductWithPriceWithCount) => ({ id: p.id, count: p.count })
        ),
      };
      await this.invoiceService.saveInvoice(payload);
      // If successfull reditect to inovoice table
      this.redirectToInvoice();
    } catch (error) {
      throw error;
    }
  }

  async updateInvoice() {
    const valueFormGroup = this.createInvoiceFormGroup.value;
    try {
      const payload: InvoicePayloadInterface = {
        idCustomer: valueFormGroup.idCustomer,
        consecutive: valueFormGroup.consecutive,
        datePurchase: `${format(new Date(), 'yyyy-MM-dd')}T00:00:00`,
        products: this.products.map(
          (p: ProductWithPriceWithCount) => ({ id: p.id, count: p.count })
        ),
      };
      await this.invoiceService.updateInvoice(this.idInvoice, payload);
      // If successfull reditect to inovoice table
      this.redirectToInvoice();
    } catch (error) {
      throw error;
    }
  }

  settingFormCreateInoice(formValues?: InvoiceWithDetail) {
    this.createInvoiceFormGroup = new FormGroup({
      idCustomer: new FormControl(
        formValues?.idCustomerFk ?? 0,
        Validators.required
      ),
      consecutive: new FormControl(
        formValues?.consecutive ?? '',
        Validators.required
      ),
    });
    this.products =
      formValues?.products.map((p) => ({
        ...p,
        totalPrice: p.count * p.price,
      })) ?? [];
  }

  getProductsFromGroup(): ProductWithPrice[] {
    return this.products;
  }

  setCellProduct(rowData: any, value: any, currentData: any) {
    const productSelected = (<any>this).lookup.items.find(
      (p: ProductWithPrice) => p.id === value
    );
    rowData.price = productSelected.price;
    rowData.count = 0;
    rowData.totalPrice = (currentData.count ?? 0) * (currentData.price ?? 0);
    (<any>this).defaultSetCellValue(rowData, value);
  }

  setCellCount(rowData: any, value: any, currentData: any) {
    rowData.totalPrice = value * currentData.price;
    (<any>this).defaultSetCellValue(rowData, value);
  }
  /**
   * If exist a consecutive the action form is editing
   * @returns boolean
   */
  isEditing() {
    return !!this.consecutiveRoute;
  }

  redirectToInvoice() {
    this.router.navigate(['/invoice']);
  }
}
