const stages_data = {
  "stage-01": {
    name: "\u00c9tape 1",
    date: "2024-06-29T12:00:00+0200",
    location: "Florence to Rimini (Italy)",
    distance: 206.01340297273117,
    up: 3450.0,
    down: -3509.0,
    type: "Hilly",
  },
  "stage-02": {
    name: "\u00c9tape 2",
    date: "2024-06-30T12:15:00+0200",
    location: "Cesenatico to Bologna (Italy)",
    distance: 200.55079964534175,
    up: 1617.0,
    down: -1555.0,
    type: "Hilly",
  },
  "stage-03": {
    name: "\u00c9tape 3",
    date: "2024-07-01T11:15:00+0200",
    location: "Piacenza to Turin (Italy)",
    distance: 227.54471105256673,
    up: 1005.0,
    down: -829.0,
    type: "Flat",
  },
  "stage-04": {
    name: "\u00c9tape 4",
    date: "2024-07-02T13:05:00+0200",
    location: "Pinerolo (Italy) to Valloire",
    distance: 137.9920968012896,
    up: 3672.0,
    down: -2676.0,
    type: "Mountain",
  },
  "stage-05": {
    name: "\u00c9tape 5",
    date: "2024-07-03T13:20:00+0200",
    location: "Saint-Jean-de-Maurienne to Saint-Vulbas",
    distance: 177.48187273186306,
    up: 884.01,
    down: -1173.01,
    type: "Flat",
  },
  "stage-06": {
    name: "\u00c9tape 6",
    date: "2024-07-04T13:35:00+0200",
    location: "M\u00e2con to Dijon",
    distance: 163.61446298246642,
    up: 590.0,
    down: -586.0,
    type: "Flat",
  },
  "stage-07": {
    name: "\u00c9tape 7",
    date: "2024-07-05T13:05:00+0200",
    location: "Nuits-Saint-Georges to Gevrey-Chambertin",
    distance: 25.24462230564409,
    up: 250.0,
    down: -228.0,
    type: "Individual Time Trial",
  },
  "stage-08": {
    name: "\u00c9tape 8",
    date: "2024-07-06T13:05:00+0200",
    location: "Semur-en-Auxois to Colombey-les-Deux-\u00c9glises",
    distance: 176.62553505609097,
    up: 2020.0,
    down: -2004.0,
    type: "Flat",
  },
  "stage-09": {
    name: "\u00c9tape 9",
    date: "2024-07-07T13:15:00+0200",
    location: "Troyes to Troyes",
    distance: 200.5808377033896,
    up: 1617.0,
    down: -1621.0,
    type: "Hilly",
  },
  "rest-01": {
    name: "Rest day 1",
    date: "2024-07-08T12:00:00+0200",
    location: "Orl\u00e9ans",
  },
  "stage-10": {
    name: "\u00c9tape 10",
    date: "2024-07-09T13:05:00+0200",
    location: "Orl\u00e9ans to Saint-Amand-Montrond",
    distance: 185.86518976462602,
    up: 558.0,
    down: -510.0,
    type: "Flat",
  },
  "stage-11": {
    name: "\u00c9tape 11",
    date: "2024-07-10T11:20:00+0200",
    location: "\u00c9vaux-les-Bains to <nobr>Le Lioran</nobr>",
    distance: 211.6557993069147,
    up: 3879.0,
    down: -3140.0,
    type: "Mountain",
  },
  "stage-12": {
    name: "\u00c9tape 12",
    date: "2024-07-11T12:35:00+0200",
    location: "Aurillac to Villeneuve-sur-Lot",
    distance: 203.8678853243621,
    up: 1931.0,
    down: -2478.0,
    type: "Flat",
  },
  "stage-13": {
    name: "\u00c9tape 13",
    date: "2024-07-12T13:30:00+0200",
    location: "Agen to Pau",
    distance: 171.62187709929796,
    up: 1555.0,
    down: -1385.0,
    type: "Flat",
  },
  "stage-14": {
    name: "\u00c9tape 14",
    date: "2024-07-13T13:05:00+0200",
    location: "Pau to Saint-Lary-Soulan (<nobr>Pla d'Adet</nobr>)",
    distance: 151.4534798180659,
    up: 3858.0,
    down: -2378.0,
    type: "Mountain",
  },
  "stage-15": {
    name: "\u00c9tape 15",
    date: "2024-07-14T11:55:00+0200",
    location: "Loudenvielle to Plateau de Beille",
    distance: 198.3923755318891,
    up: 4718.0,
    down: -3967.0,
    type: "Mountain",
  },
  "rest-02": {
    name: "Rest day 2",
    date: "2024-07-15T12:00:00+0200",
    location: "Gruissan",
  },
  "stage-16": {
    name: "\u00c9tape 16",
    date: "2024-07-16T13:05:00+0200",
    location: "Gruissan to N\u00eemes",
    distance: 189.48116269413816,
    up: 889.0,
    down: -856.0,
    type: "Flat",
  },
  "stage-17": {
    name: "\u00c9tape 17",
    date: "2024-07-17T12:35:00+0200",
    location: "Saint-Paul-Trois-Ch\u00e2teaux to SuperD\u00e9voluy",
    distance: 178.02957876988114,
    up: 2728.0,
    down: -1312.0,
    type: "Mountain",
  },
  "stage-18": {
    name: "\u00c9tape 18",
    date: "2024-07-18T13:00:00+0200",
    location: "Gap to Barcelonnette",
    distance: 177.48063302924874,
    up: 2767.0,
    down: -2573.0,
    type: "Hilly",
  },
  "stage-19": {
    name: "\u00c9tape 19",
    date: "2024-07-19T12:20:00+0200",
    location: "Embrun to <nobr>Isola 2000</nobr>",
    distance: 142.3001805244168,
    up: 4325.0,
    down: -3222.0,
    type: "Mountain",
  },
  "stage-20": {
    name: "\u00c9tape 20",
    date: "2024-07-20T13:35:00+0200",
    location: "Nice to Col de la Couillole",
    distance: 133.06154681133668,
    up: 4558.46,
    down: -2938.46,
    type: "Mountain",
  },
  "stage-21": {
    name: "\u00c9tape 21",
    date: "2024-07-21T14:40:00+0200",
    location: "Monaco to Nice",
    distance: 35.1576359348603,
    up: 682.0,
    down: -675.0,
    type: "Individual Time Trial",
  },
};

const eta_conv = 3600000;

Object.keys(stages_data).forEach((stageKey) => {
  const stageInfo = stages_data[stageKey];
  const stageDiv = document.getElementById(stageKey);
  const stageInfoDiv = document.createElement("div");
  stageInfoDiv.className = "stage-info";
  const profileDiv = document.createElement("div");
  profileDiv.className = "profile";
  profileDiv.dataset.stage = `${stageKey}`;

  const eta = document.createElement("p");
  eta.className = "eta";
  const stageStart = new Date(stages_data[stageKey].date);
  console.log(stageStart);
  let etaValue = stageStart.getTime();

  switch (stages_data[stageKey].type) {
    case "Flat":
      etaValue += ((stages_data[stageKey].distance * 1.1) / 46) * eta_conv;
      break;
    case "Hilly":
      etaValue += ((stages_data[stageKey].distance * 1.1) / 42) * eta_conv;
      break;
    case "Mountain":
      etaValue += ((stages_data[stageKey].distance * 1.1) / 39) * eta_conv;
      break;
    case "Individual Time Trial":
      if (stageKey == "stage-21") {
        etaValue += ((stages_data[stageKey].distance * 7) / 50) * eta_conv;
      } else {
        etaValue += ((stages_data[stageKey].distance * 9) / 50) * eta_conv;
      }
      break;
  }
  console.log(etaValue);
  eta.textContent = `ETA: ${new Date(etaValue)
    .toLocaleTimeString("en-GB")
    .slice(0, -3)}`;

  const stageHeader = document.createElement("h2");
  stageHeader.textContent = stages_data[stageKey].name;
  stageHeader.textContent += ` : ${stageStart
    .toLocaleDateString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, -5)
    .replace(",", "")}`;
  stageDiv.appendChild(stageHeader);

  Object.keys(stageInfo).forEach((key) => {
    if (!["name", "date"].includes(key)) {
      const p = document.createElement("p");
      p.className = `${key}`;
      if (key === "location") {
        p.innerHTML = `${stageInfo[key]}`;
        stageDiv.appendChild(p);
      } else if (key == "distance") {
        p.textContent = `${stageInfo[key].toFixed(1)}`;
        stageDiv.appendChild(p);
      } else if (["down", "up"].includes(key)) {
        p.textContent = `${Math.abs(stageInfo[key].toFixed(0))}`;
        stageInfoDiv.appendChild(p);
      } else if (key === "type") {
        p.dataset.type = `${stageInfo[key].toLowerCase().replaceAll(" ", "-")}`;
        p.textContent = `${stageInfo[key]}`;
        stageDiv.appendChild(p);
      } else {
        p.textContent = `${stageInfo[key]}`;
        stageInfoDiv.appendChild(p);
      }
      if (!["rest-01", "rest-02"].includes(stageKey)) {
        stageDiv.appendChild(profileDiv);
        stageInfoDiv.appendChild(eta);
      }

      stageDiv.appendChild(stageInfoDiv);
    }
  });
});
