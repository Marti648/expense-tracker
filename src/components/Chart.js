
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth()  //this gets month in idx => Jan = 0 etc
        dataPoints[expenseMonth].value += expense.amount; //mapping every monthly expense to datapoints values
    }

    //finding maxValue
    const dataPointValues = props.expenses.map((expense) => { //form array of only values
        return expense.amount;
    })

    const totalMaximum = Math.max(...dataPointValues);

    return <div className='chart'>
        {
            dataPoints.map((dataPoint) => {
                return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
            })
        }
    </div>
}

export default Chart;