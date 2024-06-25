import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const url = "output.psv";
const data = await d3.dsv("|", url, (row) => {
  return {
    stage: row.stage,
    lat: +row.lat,
    lon: +row.lon,
    ele: +row.ele,
    dist: +row.dist,
  };
});

const objects = {};
data.forEach((row) => {
  const { stage, ...rest } = row;
  if (!objects[stage]) {
    objects[stage] = [];
  }
  objects[stage].push(rest);
});

function drawChart(objectsKey) {
  const width = 600;
  const height = 100;

  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.dist)])
    // .domain(d3.extent(objects[objectsKey], (d) => d.dist))
    .range([0, width]);

  const y = d3.scaleLinear([0, d3.max(data, (d) => d.ele)], [height, 0]);

  const line = d3
    .line()
    .x((d) => x(d.dist))
    .y((d) => y(d.ele));

  const area = d3
    .area()
    .x((d) => x(d.dist))
    .y0(y(0))
    .y1((d) => y(d.ele));

  const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);

  svg
    .append("path")
    .datum(objects[objectsKey])
    .attr("class", "profile-area")
    .attr("d", area);

  svg
    .append("path")
    .datum(objects[objectsKey])
    .attr("class", "profile-line")
    .attr("d", line);

  const container = document.querySelector(`div[data-stage="${objectsKey}"]`);
  container.append(svg.node());
}

for (const key in objects) {
  drawChart(key);
}
