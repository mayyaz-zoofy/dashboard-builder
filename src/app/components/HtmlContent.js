import { useEffect, useState } from "react";
import { conditionalPriorityRendering } from "../utils/helpers";

function HtmlContent(props) {
    const { content, current, priority, setCurrent } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const condition = conditionalPriorityRendering(current, priority);
        if (loading && condition) {
            setLoading(false);
            setCurrent(priority || 1);
        }
    })

    if (loading) {
        return <div className="w-full" />;
    }

    return <div dangerouslySetInnerHTML={{__html: content}} />;
}

export default HtmlContent;