import React, { useState } from 'react'
import './models.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { modelsData } from './data';

const Models = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='models-section'>
            <div className='title'>
                <h1>OUR MODELS</h1>
            </div>
            <Tabs className='tabs' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='tab-list'>
                    <Tab>Any</Tab>
                    <Tab>Kids</Tab>
                    <Tab>Female</Tab>
                    <Tab>Male</Tab>
                    <Tab>Mature</Tab>
                </TabList>
                <TabPanel className='tab-panel'>
                    <div className="grid-container">
                        {modelsData.map((model, index) => (
                            <>
                                {index === modelsData.length - 1 && (
                                    <div className='card'>
                                        <h1>WANT TO BE HERE?</h1>
                                        <p>ModelKos is seeking for new talent, so join the
                                            largest modeling agency in Kosovo and show
                                            off your skills. Be a model!</p>
                                    </div>
                                )}
                                <div key={model.id} className="grid-item">
                                    <img src={model.image} alt={`Model ${model.id}`} />
                                </div>
                            </>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel className='tab-panel'>
                    image4
                    image5
                    image6
                </TabPanel>
            </Tabs>
            <div className='button'>
                <button>See all models</button>
            </div>
        </div>
    );
}

export default Models