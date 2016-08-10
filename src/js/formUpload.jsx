/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-09 14:00:32
 * @version $Id$
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.css';
import '../css/components/form.css';
import { Form, Input, Row, Col, Button, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
class PicUpload extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('表单值：', this.props.form.getFieldsValue());
  }
  render() {
    const { getFieldProps } = this.props.form;

    return (
      <Form inline horizontal onSubmit={this.handleSubmit} style={{width:800,margin:"auto"}}>
      <Row gutter={16}>
        <Col sm={10}>
          <FormItem label="图片路径：">
            <a className="pic-choose">
              <Input type="file" {...getFieldProps('fileUrl', { initialValue: '' })}/>
              选择文件
            </a>
          </FormItem>
          <FormItem label="像素信息：">
            <Select defaultValue="200" {...getFieldProps('pxInfo', { initialValue: '200' })} style={{ width: 200,margin:4 }}>
              <Option value="200">200*200</Option>
              <Option value="300">300*300</Option>
              <Option value="400">400*400</Option>
              <Option value="500">500*500</Option>
            </Select>
          </FormItem>
          <FormItem label="图片描述：">
            <Input type="text" {...getFieldProps('picDescribe', { initialValue: '' })} style={{width:200,margin:4}}/>
          </FormItem>
        </Col>
        <Col sm={10}>
          <FormItem label="图片类型">
          <Select defaultValue="1"  {...getFieldProps('picType', { initialValue: '1' })} style={{width:200,margin:4}}>
            <Option value="1">航线列表图</Option>
            <Option value="2">缩略图</Option>
            <Option value="3">邮轮大图</Option>
          </Select>
          </FormItem>
          <FormItem label="图片名称">
            <Input type="text" {...getFieldProps('picName', { initialValue: '' })} style={{width:200,margin:4}}/>
          </FormItem>
          <FormItem label="字典配置">
            <Input type="text" {...getFieldProps('word', { initialValue: '' })} style={{width:200,margin:4}}/>
          </FormItem>
        </Col>
        <Col>
        <Button type="primary" htmlType="submit" style={{margin:4}}>上传</Button>
        </Col>
      </Row>
      </Form>
    );
  }
};

PicUpload = Form.create()(PicUpload);

render(<PicUpload />, document.getElementById('root'));
