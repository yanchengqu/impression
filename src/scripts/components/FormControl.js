import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * FormControl 组件.
 */
export default class FormControl extends Component{
    //prop type校验
    static propTypes = {
        //子节点
        children: PropTypes.element.isRequired,
    }
    //渲染
    render(){
        let { children } = this.props,
            { className } = children;
        children = React.cloneElement(children, {
            className: classnames(className, 'form-control')
        });

        return children;
    }
}