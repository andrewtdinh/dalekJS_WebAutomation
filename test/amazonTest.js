module.exports = {
  'Amazon test': function (test){
    test
      .open('http://www.amazon.com')
      .type('#twotabsearchtextbox', 'Blues Brothers VHS')
      .click('.nav-search-submit')
      .waitForElement('#result_0')
      // .assert.text('#result_0 .newaps a span').is('The Blues Brothers')
      .assert.text('#result_0 h2').is('The Blues Brothers')
      .done();
  }
}
