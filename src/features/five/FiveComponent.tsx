import * as React from 'react'
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

// redux相关

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {fetchWorkAsync, selectWork} from './fiveSlice' // 拿到获取work数据的action
import useWindowDimensions from "../../utils/useWindowDimensions";
import {parseWork} from "@realsee/five";

const workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";

const FiveProvider = createFiveProvider()

function FiveComponent() {
    const work = useAppSelector(selectWork)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(fetchWorkAsync(workURL))
    }, [dispatch])

    const size = useWindowDimensions();
    return work && <FiveProvider initialWork={parseWork(work)}>
		<FiveCanvas {...size}/>
	</FiveProvider>;
}

export default FiveComponent
