import React, { useEffect, useState } from "react";
import { conditionalPriorityRendering } from "./helpers";
import MiniLoading from "./MiniLoading";

export default class PrioritySuspense extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: !conditionalPriorityRendering(props.current, props.priority)
        }
    }

    componentDidUpdate() {
        const condition = conditionalPriorityRendering(this.props.current, this.props.priority)
        if (this.state.loading && condition) {
            this.setState({
                loading: false
            });
            this.props.setCurrent(this.props.priority || 1);
        }
    }

    componentDidMount() {
        // console.log('next1', this.props.index, this.state.loading)
        if (!this.state.loading) {
            console.log('mount', this.props.item.type)
            this.props.setCurrent(this.props.priority || 1);
        }
    }

    render() {
        if (this.state.loading) {
            return <MiniLoading />;
        }

        return <>{this.props.children}</>
    }
}
