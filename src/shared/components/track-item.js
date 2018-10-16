import React from "react";
import { durationFormat } from "../../http/utilities";

const TrackItem = props => (
    <tr>
        <td>{props.idx}</td>
        <td>{props.name}</td>
        <td>{durationFormat(props.duration)}</td>
    </tr>
)

export default TrackItem;