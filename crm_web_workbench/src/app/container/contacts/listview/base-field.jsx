/**
 * 这个base-field只给detail界面使用.listView只禁止调用这个文件
 */
// import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BaseContext from '../base-field';

class ListViewContext extends BaseContext {

}

export default connect(
    null,
    dispatch => bindActionCreators({ }, dispatch)
)(ListViewContext);
