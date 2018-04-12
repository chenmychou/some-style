import React, { Component } from 'react';
import { commonPtys } from '../util';
import Lookup from './_lookup';

export default class BaseLookup extends Component {
    constructor(props) {
        super(props);
    }
    handleOnLookupChange(param) {
        let { onChange } = this.props;
        onChange(param);
    }
    buildField() {
        let { schema, value, error = false, active, placeholder } = this.props;
        // let objectList = [];
        let object_name = schema.object_name;
        return (
            <Lookup
                active={active}
                error={error}
                objName={object_name}
                value={value}
                placeholder={placeholder || `请选择${schema.display_name}`}
                onChange={::this.handleOnLookupChange}
                schema={schema} />
        );
    }

    render() {
        return this.buildField();
    }
}

BaseLookup.propTypes = {
    ...commonPtys
};

