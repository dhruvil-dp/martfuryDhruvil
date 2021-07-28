import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Occasion from '~/components/partials/account/Occasion';
import ContainerPage from '~/components/layouts/ContainerPage';

const OccasionPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Occasion',
        },
    ];
    return (
        <ContainerPage title="occasion" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Occasion />
            </div>
        </ContainerPage>
    );
};

export default OccasionPage;
