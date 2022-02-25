import * as React from 'react';
import {LoaderWrapper} from "./style";
import Loader from "react-js-loader"

export const Loading = () => {
    return (
        <LoaderWrapper className={"item"}>
            <Loader type="hourglass" bgColor={"#F77B57"} title={"carregando ..."} color={'#F77B57'} size={100} />
        </LoaderWrapper>
    );
};
