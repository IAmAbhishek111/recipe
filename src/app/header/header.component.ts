// import { outputAst } from "@angular/compiler
import { Component, EventEmitter , Output } from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

  @Output()  feautureSelected = new EventEmitter<string>();
    onSelect(feature : string){
        this.feautureSelected.emit(feature);

    }
}