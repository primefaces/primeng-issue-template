import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Import PrimeNG modules
import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ChartModule } from "primeng/chart";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ColorPickerModule } from "primeng/colorpicker";
import { ContextMenuModule } from "primeng/contextmenu";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DragDropModule } from "primeng/dragdrop";
import { EditorModule } from "primeng/editor";
import { FieldsetModule } from "primeng/fieldset";
import { FileUploadModule } from "primeng/fileupload";
import { GalleriaModule } from "primeng/galleria";
import { InplaceModule } from "primeng/inplace";
import { InputMaskModule } from "primeng/inputmask";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { KnobModule } from "primeng/knob";
import { ListboxModule } from "primeng/listbox";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { OrganizationChartModule } from "primeng/organizationchart";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PasswordModule } from "primeng/password";
import { PickListModule } from "primeng/picklist";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ScrollTopModule } from "primeng/scrolltop";
import { SelectButtonModule } from "primeng/selectbutton";
import { SkeletonModule } from "primeng/skeleton";
import { SliderModule } from "primeng/slider";
import { SplitButtonModule } from "primeng/splitbutton";
import { SplitterModule } from "primeng/splitter";
import { StepsModule } from "primeng/steps";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { TerminalModule } from "primeng/terminal";
import { TieredMenuModule } from "primeng/tieredmenu";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from "primeng/tree";
import { TreeTableModule } from "primeng/treetable";
import { TextareaModule } from "primeng/textarea";
import { ProgressSpinnerModule } from "primeng/progressspinner";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DragDropModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    InplaceModule,
    InputMaskModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule,
    KnobModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MultiSelectModule,
    OrganizationChartModule,
    OrderListModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    SliderModule,
    ProgressSpinnerModule,
    SplitterModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  counter = 0;

  onClick() {
    this.counter++;
  }
}
