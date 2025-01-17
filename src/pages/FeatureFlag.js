import { FeatureFlagProvider, useFeatureFlags } from "../components/featureFlag";

const FeatureFlagPage = () => {
    return (
        <FeatureFlagProvider>
            <RootComponent />
        </FeatureFlagProvider>
    )
}

export default FeatureFlagPage;

const RootComponent = () => {
    return <div>
        <Component1 />
    </div>
}

const Component1 = () => {
    const flagObj = useFeatureFlags();
    const {isLoading, featureFlags} = flagObj;
    if(isLoading) return <div>Loading...</div>;
    if (featureFlags['new-dashboard']) return <div>New Dashboard</div>
    return <div>Default Dashboard</div>
}