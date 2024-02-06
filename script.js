// Dados de exemplo
const data = [
  { label: "Número de Clínicas", value: 10 },
  { label: "Sessões Realizadas", value: 500 },
  { label: "Pacientes", value: 200 },
  { label: "Tempo Médio de Reabilitação", value: 40 },
];

// Configurações do gráfico
const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

// Calcula a largura do gráfico
const chartWidth = width - margin.left - margin.right;

// Cria a escala para os valores
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([height - margin.bottom, margin.top]);

// Cria a escala para os rótulos
const xScale = d3.scaleBand()
  .domain(data.map(d => d.label))
  .range([margin.left, width - margin.right])
  .padding(0.1);

// Cria o elemento SVG para o gráfico
const svg = d3.select("#chart")
  .attr("width", width)
  .attr("height", height);

// Adiciona as barras ao gráfico
svg.selectAll("rect")
  .data(data)
  .join("rect")
  .attr("x", d => xScale(d.label))
  .attr("y", d => yScale(d.value))
  .attr("width", xScale.bandwidth())
  .attr("height", d => height - margin.bottom - yScale(d.value))
  .attr("fill", "steelblue");

// Adiciona os rótulos ao gráfico
svg.selectAll("text")
  .data(data)
  .join("text")
  .text(d => d.value)
  .attr("x", d => xScale(d.label) + xScale.bandwidth() / 2)
  .attr("y", d => yScale(d.value) - 5)
  .attr("text-anchor", "middle")
  .attr("fill", "white");

// Adiciona os eixos ao gráfico
svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(yScale));

svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(xScale))
  .selectAll("text")
  .attr("transform", "rotate(-45)")
  .attr("text-anchor", "end");
