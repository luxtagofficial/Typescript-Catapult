import { AccountHttp, NetworkType, PublicAccount, QueryParams } from 'nem2-sdk';

export class Example {
  public static logTransactions(publicKey: string): void {
    const accountHttp = new AccountHttp('http://api.beta.catapult.mijin.io:3000');
    const publicAccount =  PublicAccount.createFromPublicKey(publicKey, NetworkType.MIJIN_TEST);

    const pageSize = 10; // Page size between 10 and 100, otherwise 10

    accountHttp
      .transactions(publicAccount, new QueryParams(pageSize))
      .subscribe((transactions) => {
        console.log(transactions);
      }, (err) => {
        console.error(err);
      });
  }
}
  