  // Tip Calculations
  // document.getElementById("compute").onclick = handleClick();

  function handleClick() {
    const totalcc = parseFloat(document.getElementById("totalCc").value);
    const tipscc = parseFloat(document.getElementById("tipsCc").value);
    const tipsgc = parseFloat(document.getElementById("tipsGc").value);
    const tipscash = parseFloat(document.getElementById("tipsCash").value);
    const cashSales = parseFloat(document.getElementById("cashSales").value);
    const busserPercent = (parseInt(document.getElementById("busserPer").value)) / 100;
    const barista = document.querySelector("input[type=radio][name=barista]:checked").value;
    let bartips;
    let runner;
    let stocker;
    console.log(barista);
    const rbSomm = document.querySelector("input[type=radio][name=somm]:checked").value;
    console.log(rbSomm);  
    const rbMeal = document.querySelector("input[type=radio][name=meal]:checked").value;
    console.log(rbMeal);
    console.log(totalcc);
    let tipsTotal = (tipscc + tipsgc + tipscash);
    console.log(tipsTotal);
      if (rbMeal == "lunch") {
        bartips =  +(tipsTotal * 0.035).toFixed(2);
        runner = +(tipsTotal * 0.085).toFixed(2);
        stocker = 3;
      } else {
        bartips =  +(tipsTotal * 0.05).toFixed(2);
        runner = +(tipsTotal * 0.1).toFixed(2);
        stocker = 8;
        
      }
      console.log(bartips)
      console.log(runner);
      ccPercent = parseInt((tipscc / totalcc) * 100);
      cashTipPercent = parseInt((tipscash / cashSales) *100);
      busserTips = +(tipsTotal * busserPercent).toFixed(2);
      sommTips = +(tipsTotal * rbSomm).toFixed(2);
      totaltipout = bartips + busserTips + sommTips + barista + stocker + runner;
      ttto2 = +()
      cardTips = (tipscc + tipsgc) - totaltipout;
      netTips = tipsTotal - totaltipout;
      console.log(busserTips);
      console.log(cashTipPercent);

    document.getElementById("ccTipPercent").append(ccPercent);
    document.getElementById("cashTipPercent").append(cashTipPercent);
    document.getElementById("totaltips").append(tipsTotal);
    document.getElementById("barTipout").append(bartips);
    document.getElementById("busserTipout").append(busserTips);
    document.getElementById("sommTipout").append(sommTips);
    document.getElementById("baristaTipout").append(barista);
    document.getElementById("stockerTipout").append(stocker);
    document.getElementById("runnerTipout").append(runner);
    document.getElementById("totalTipout").append(totaltipout);
    document.getElementById("cardTips").append(cardTips);
    document.getElementById("netTips").append(netTips);

      
    }


