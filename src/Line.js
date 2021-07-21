import { Input, Row, Col } from "reacthalfmoon";

export default function Line(props) {
	return (
		<div>
			<Row className="h-50 w-350 w-md-450">
				{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value =>
					{
						const empty = props.empty[props.row].includes(value)
						const className = "h-full bg-input text-center border-0 font-size-18 font-weight-bold " + (empty ? "text-danger" : "text-readonly" )
						return (<Col key={value} className="p-5">
							<Input
								value={props.data[value]}
								{...(empty ? {onChange: (e) => props.update(e, props.row, value)} : {readOnly: true} )}
								className={className}
								min="1"
								max="9"
								type="number"
							></Input>
						</Col>)
					})
				}
			</Row>
		</div>
	)
}