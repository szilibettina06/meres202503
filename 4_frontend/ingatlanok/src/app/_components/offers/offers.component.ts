import { Component } from '@angular/core';
export interface Property {
            category: string;
            description: string;
            date: string;
            free: string;
            image: string;
        }
@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  properties: Property[] = [
        { category: "Ház", description: "Kertvárosi részén, egyszintes ház nyugodt környezetben.", date: "2022.03.14", free: "Igen", image: "assets/house1.jpg" },
        { category: "Ház", description: "Belvárosi kis méretű családi ház eladó.", date: "2022.03.21", free: "Igen", image: "assets/house2.jpg" },
        { category: "Lakás", description: "Kétszintes berendezett lakás kiadó.", date: "2022.03.17", free: "Igen", image: "assets/apartment1.jpg" },
        { category: "Ház", description: "Tágas családi ház medencével és kerttel.", date: "2022.04.10", free: "Igen", image: "assets/house3.jpg" },
        { category: "Lakás", description: "Modern lakás a belváros szívében.", date: "2022.05.12", free: "Nem", image: "assets/apartment2.jpg" },
        { category: "Ház", description: "Felújított vidéki ház csendes környezetben.", date: "2022.06.05", free: "Igen", image: "assets/house4.jpg" },
        { category: "Lakás", description: "Panorámás lakás terasszal.", date: "2022.07.20", free: "Igen", image: "assets/apartment3.jpg" },
        { category: "Ház", description: "Kétszintes villa luxus kivitelben.", date: "2022.08.15", free: "Nem", image: "assets/house5.jpg" },
        { category: "Lakás", description: "Kis garzonlakás fiataloknak.", date: "2022.09.08", free: "Igen", image: "assets/apartment4.jpg" },
        { category: "Ház", description: "Modern családi ház garázzsal.", date: "2022.10.22", free: "Igen", image: "assets/house6.jpg" },
        { category: "Lakás", description: "Felszerelt apartman kiadó.", date: "2022.11.30", free: "Nem", image: "assets/apartment5.jpg" },
        
    ];
}
