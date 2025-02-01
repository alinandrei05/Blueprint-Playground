import { useState } from 'react';
import { Button, MenuItem } from '@blueprintjs/core';
import { Select2 } from '@blueprintjs/select';

import { Example } from '../example/example';
import { filterFilm, renderFilm, IFilm, TOP_100_FILMS } from './films';
import styles from './select-example.module.scss';

export interface SelectExampleProps {
    className?: string;
}

export const SelectExample = ({ className }: SelectExampleProps) => {
    const [film, setFilm] = useState<IFilm>(TOP_100_FILMS[0]);
    return (
        <Example header="Select Exampleee">
            <Select2<IFilm>
                items={TOP_100_FILMS}
                itemPredicate={filterFilm}
                itemRenderer={renderFilm}
                noResults={<MenuItem disabled={true} text="No results." />}
                onItemSelect={setFilm}
                className={styles.select}
            >
                <Button
                    onClick={(event: any): void => {
                        alert('hello');
                    }}
                    className={styles.button}
                    alignText="right"
                    rightIcon="caret-down"
                    text={film.title}
                />
            </Select2>
        </Example>
    );
};
