import React, { ReactElement } from 'react'
import {
    SelectorStateProps,
    SelectorDispatchProps,
    DbItems,
} from './selector.model'
import { Dropdown, SafeAnchor } from 'react-bootstrap'
import { AChangeSelector } from './selector.actions'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'
import { DropdownItemProps } from 'react-bootstrap/DropdownItem'

const selector: React.FC<SelectorStateProps & SelectorDispatchProps> = (
    props: SelectorStateProps & SelectorDispatchProps
): ReactElement => (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {
                DbItems.filter(
                    (item: any): any => item.value === props.selector
                )[0].key
            }
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {DbItems.map((item: any, index: number): any => (
                <Dropdown.Item
                    key={index}
                    onClick={(
                        e: React.MouseEvent<
                            ReplaceProps<
                                typeof SafeAnchor,
                                BsPrefixProps<typeof SafeAnchor> &
                                    DropdownItemProps
                            >,
                            MouseEvent
                        >
                    ): void => e.preventDefault()}
                    onSelect={(eventKey: any): AChangeSelector =>
                        props.changeSelector(eventKey)
                    }
                    href={item.value}
                >
                    {item.key}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
)

export default selector
