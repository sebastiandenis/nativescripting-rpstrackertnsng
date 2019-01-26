import { Component, OnInit } from '@angular/core';
import { PresetType } from "../../models/ui/types/presets";

@Component({
    moduleId: module.id,
    selector: 'pt-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    public onSelectPresetTap(preset: PresetType){
        // TODO: navigate to the preset URL
    }
}
