export declare interface InitialMethods {
    initialSubscription(): void;
    initialSettingComponent?: () => void;
    settingTitle?: () => void
    loadInitialData?: () => void
}