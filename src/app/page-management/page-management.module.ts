import { PageManagementService } from "./page-management.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageManagementComponent } from "./page-management.component";
import { PageManagementRouting } from "./page-management-routing.module";
import { SharedModule } from "../shared/shared.module";
import { SelectSubjectComponent } from "./select-subject/select-subject.component";
import { SelectTitleComponent } from "./select-title/select-title.component";
import { ShowPageComponent } from "./show-page/show-page.component";

@NgModule({
  declarations: [
    PageManagementComponent,
    SelectSubjectComponent,
    SelectTitleComponent,
    ShowPageComponent,
  ],
  imports: [CommonModule, PageManagementRouting, SharedModule],
  // exports:[]
  providers: [PageManagementService],
})
export class PageManagementModule {}
