import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/Layout';
import { publicRouter } from '~/router';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((value, index) => {
                        let Layout = DefaultLayout;
                        if (value.layout) {
                            Layout = value.layout;
                        } else if (value.layout === null) {
                            Layout = Fragment;
                        }
                        const PageRouter = value.component;
                        return (
                            <Route
                                key={index}
                                path={value.path}
                                element={
                                    <Layout>
                                        <PageRouter />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
