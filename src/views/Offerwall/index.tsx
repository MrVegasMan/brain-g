import { useState } from 'react';

import { oferCard } from '@/mocs/index.ts';

import OfferCard from '@components/Offer/OfferCard.tsx';

function Offerwall() {
    const [pageTitle] = useState('Get more IQ points');

    return (
        <div>
            <h1 className="display-450-accent">{pageTitle}</h1>
            {oferCard.map((task) => (
                <OfferCard data={task} key={task.id} />
            ))}
        </div>
    );
}

export default Offerwall;
