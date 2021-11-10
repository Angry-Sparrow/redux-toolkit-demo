// A mock function to mimic making an async request for data
import { Work } from "@realsee/five";

export function fetchWork(url = '') {
    return new Promise<{ data: Work | null }>((resolve) =>
        fetch(url)
            .then(res => res.json())
            .then(text => {
                resolve({ data: text })
            })
            .catch(e => resolve({data: null}))
    );
}
