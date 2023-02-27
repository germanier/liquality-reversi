import { Injectable } from '@angular/core';
import { setup } from "@liquality/wallet-sdk";
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class LiqualityService {
  constructor() { }

  public setupSDK() {
    setup({
      alchemyApiKey: environment.ALCHEMY_API_KEY,
      etherscanApiKey: environment.ETHERSCAN_API_KEY,
      infuraProjectId: '-',
      pocketNetworkApplicationID: '-',
      quorum: 1,
      slowGasPriceMultiplier: 1,
      averageGasPriceMultiplier: 1.5,
      fastGasPriceMultiplier: 2,
      gasLimitMargin: 2000
    });
  }

}