import React from 'react';
// import DesignTool from './DesignTool'
const DesignTool = React.lazy(() => import('./DesignTool'));

class Home extends React.Component<{}, {}> {
    public render() {
        return (
            <React.Suspense fallback={<div>Loading ...</div>}>
                <DesignTool />
            </React.Suspense>
        );
    }
}

export default Home;
