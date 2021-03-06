import Mixin from '@ember/object/mixin';
import { observer } from '@ember/object';
import ExchangeRatesTable from 'fakturama/models/exchange-rates-table';

export default Mixin.create({
  prevIssueDate: null,

  issueDateDidChange: observer('issueDate', function() {
    const issueDate = this.get('issueDate');
    const prevIssueDate = this.get('prevIssueDate');

    // Hack to avoid re-assigning issueDate and exchange attributes if not needed
    if (issueDate && prevIssueDate !== issueDate) {
      this.set('prevIssueDate', issueDate);
      this.set(
        'exchangeRateTable',
        ExchangeRatesTable.find(this.get('issueDate'))
      );
    }
  }),

  exchangeRateCurrencyDidChange: observer(
    'currencyCode',
    'exchangeRateTable.pozycja',
    function() {
      const currency = this.getWithDefault(
        'exchangeRateTable.pozycja',
        []
      ).findBy('kod_waluty', this.get('currencyCode'));
      let exchangeDate = null;
      let exchangeRate = null;
      let exchangeDivisor = null;

      if (currency) {
        exchangeDate = this.get('exchangeRateTable.data_publikacji');
        exchangeRate = parseInt(currency.kurs_sredni.replace(',', ''), 10);
        exchangeDivisor = parseInt(currency.przelicznik, 10);
      }
      this.setProperties({
        exchangeDate: exchangeDate,
        exchangeRate: exchangeRate,
        exchangeDivisor: exchangeDivisor
      });
    }
  )
});
