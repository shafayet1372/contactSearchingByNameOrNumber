import regexifyString from "regexify-string";

let modifySearchedValue = (searchValue, data) => {
    return data
        .filter((x) => {
            return (
                new RegExp(`${searchValue}`, "i").test(x.number) ||
                new RegExp(`${searchValue}`, "i").test(x.name)
            );
        })
        .map((x) => {
            let isNumberOrName = new RegExp(`${searchValue}`, "i").test(x.number);
            const result = regexifyString({
                pattern: new RegExp(`${searchValue}`, "i"),
                decorator: (match, index) => {
                    if (index == 0) {
                        return (
                            <span key={x.id} style={{ color: "green" }}>
                                {match}
                            </span>
                        );
                    }
                },
                input: isNumberOrName ? x.number : x.name,
            });
            if (isNumberOrName) {
                return { ...x, number: result };
            } else {
                return { ...x, name: result };
            }
        });
}

export default modifySearchedValue