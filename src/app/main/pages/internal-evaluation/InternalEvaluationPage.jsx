import React from 'react'
import FusePageCarded from '@fuse/core/FusePageCarded';
import InternalEvaluationPageForm from './InternalEvaluationPageForm';
import styled from 'styled-components';
const Root = styled(FusePageCarded)({
    "& .FusePageCarded-contentCard": { marginTop: "185px" },
    "& .FusePageCarded-contentWrapper": { padding: "10px" },
    "& .FusePageCarded-topBg + div.flex.container": {
        maxWidth: "100% !important;",
    },
});
const InternalEvaluationPage = () => {
    return (
        <Root
            header={
                <h1 style={{ padding: "20px 0px" }}>Internal Evaluation Form</h1>
            }
            contentToolbar={
                <h1>Internal Evaluation Form</h1>
            }
            content={
                <InternalEvaluationPageForm />
            }
        />
    )
}

export default InternalEvaluationPage