import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import Stat from "../../components/Stat";
import Pills from "../../components/Pills";
import Badge from "../../components/Badge";
import httpClient from "../../../httpClient";
import { getInitiatorById } from '../../../configs/urlMapping';
import DashboardLayout from "../../layouts/DashboardLayout";
import Loading from "../../utils/Loading";
import Div from "../../components/Div";
import HtmlContent from "../../components/HtmlContent";
import TableWrapper from "./wrappers/TableWrapper";
import GLinear from "../../components/charts/GLinear";
import Image from '../../components/Image';
import Link from "../../components/Link";
import GLineWrapper from "../../components/charts/GLine";
import GPieWrapper from "../../components/charts/GPie";
import GBarWrapper from "../../components/charts/GBar";
import GCircular from "../../components/charts/GCircular";

const options = [
    {
        "label": "Last week",
        "value": "week"
    },
    {
        "label": "Last two weeks",
        "value": "fortnight"
    },
    {
        "label": "Last month",
        "value": "month"
    }
];

function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [initiator, setInitiator] = useState({});
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        httpClient(getInitiatorById, { id: params.id })
            .then(res => {
                setInitiator(res.data);
                setLoading(false);
            }).catch(err => {
                history.push('/error-404');
            })
    }, [params.id]);

    const renderItems = (items) => {
        return items.map((item, index) => {
            switch (item.type) {
                case 'div':
                    let children = '';
                    if (item.children) {
                        children = renderItems(item.children);
                    }
                    return <Div { ...item }>{children}</Div>;
                case 'html':
                    return <HtmlContent content={item.content} />;
                case 'stat':
                    return <Stat { ...item } />
                case 'gLine':
                    return <GLineWrapper { ...item } />;
                case 'pills':
                    return <Pills { ...item } />;
                case 'table':
                    return <TableWrapper { ...item } />;
                case 'badge':
                    return <Badge title={item.label} />;
                case 'image':
                    return <Image { ...item } />;
                case 'gPie':
                    return <GPieWrapper { ...item } />;
                case 'gBar':
                    return <GBarWrapper { ...item } />;
                case 'pLinear':
                    return <GLinear { ...item } />;
                case 'pCircular':
                    return <GCircular { ...item } />;
                case 'link':
                    return <Link { ...item } />;
                default:
                    return '';

            }
        });
    }

    const renderItem = (item) => {

    }

    const renderBody = () => {
        if (!initiator.content || !initiator.content.body) {
            history.push('/errors-404')
            console.error("Content of body cannot be empty");
            return '';
        }
        const { body } = initiator.content;
        return renderItems(body);

    }

    if (loading) {
        return (
            <div className="flex w-full h-screen justify-center items-center">
                <Loading />
            </div>
        )
    }

    return (
        <DashboardLayout theme={initiator.theme} data={initiator}>
            <div className="flex flex-wrap w-full">
                {renderBody()}
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;