import React from 'react';
import { useParams } from 'react-router-dom';
import NoService from './NoService';
import Service from './Service';

export default function FindService({ ...rest }) {
    const params = useParams();
    const services = [];
    if (params?.id === undefined) return <NoService />;
    const serviceID = Number(params.id);
    if (serviceID === undefined) return <NoService />;
    const service = services.find(x => x?.id === serviceID);
    return <Service service={ service } { ...rest } />;
};