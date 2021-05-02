function HtmlContent(props) {
    const { content } = props;
    return <div dangerouslySetInnerHTML={{__html: content}} />;
}

export default HtmlContent;