const optionsSetup = {
    indexAxis: 'x',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: '',
      },
    },
  }

const dataSetup = {
    labels: [],
    datasets: [
      {
        label: 'Number of infections',
        data: [],
        borderWidth: 1,
      },
    ],
  }

export const getChartConfig = ({report, selectedCountry}) => {
    const labels = report.map(r => r.region.province || r.region.name)
    const data = {
        ...dataSetup, 
        labels,
        datasets: [{
            ...dataSetup.datasets[0],
            data: report.map(r => r.confirmed_diff)
        }]
    }

    const options = {
        ...optionsSetup,
        plugins: {
            ...optionsSetup.plugins,
            title: {
                ...optionsSetup.plugins.title,
                text: `Report of Covid-19 contagion in ${selectedCountry.name} the ${selectedCountry.date}`
            }
        }
    }
    return {options, data}
}