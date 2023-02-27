import { Injectable } from '@angular/core';
import { setup } from "@liquality/wallet-sdk";


@Injectable({
  providedIn: 'root'
})
export class LiqualityService {
  constructor() { }

  setupSDK() {
    setup({
      alchemyApiKey: 'YOUR_API_KEY_HERE',
      etherscanApiKey: 'YOUR_API_KEY_HERE',
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