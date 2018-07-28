import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class MapleSyrup {
  name: string;
  description: string;
  barcode: string;
  imageUrl: string;
}

export class OpenFoodFactsAPIResponse {
  code: string;
  product: {
    product_name: string;
    image_url: string;
  }
}

@Component({
  selector: 'app-favorite-maple-syrup',
  templateUrl: './favorite-maple-syrup.component.html',
  styleUrls: ['./favorite-maple-syrup.component.css']
})
export class FavoriteMapleSyrupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() mapleSyrupOptions: MapleSyrup[] = [];

  ngOnInit() {
    this.loadSyrupOptions();
  }

  loadSyrupOptions() {

    this.http.get('https://world.openfoodfacts.org/api/v0/product/0093313306952.json')
      .subscribe((response: OpenFoodFactsAPIResponse) => {
        this.mapleSyrupOptions.push(this.mapResponse(response));
      });

    this.http.get('https://world.openfoodfacts.org/api/v0/product/0062558121002.json')
      .subscribe((response: OpenFoodFactsAPIResponse) => {
        this.mapleSyrupOptions.push(this.mapResponse(response));
      });

    this.http.get('https://world.openfoodfacts.org/api/v0/product/0059749930048.json')
      .subscribe((response: OpenFoodFactsAPIResponse) => {
        this.mapleSyrupOptions.push(this.mapResponse(response));
      });
    
  }

  mapResponse(response: OpenFoodFactsAPIResponse): MapleSyrup {
    let mapleSyrup = new MapleSyrup();
    mapleSyrup.barcode = response.code;
    mapleSyrup.name = response.product.product_name;
    mapleSyrup.imageUrl = response.product.image_url;
    return mapleSyrup;
  }
  
}
