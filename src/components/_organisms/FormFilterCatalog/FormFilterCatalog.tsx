import {
    InputNumber,
    Checkbox,
    Collapse,
    Button,
    Slider,
    Radio,
    Form,
    Col,
    Row,
} from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

import { setFilteredTechnique } from 'src/redux/technique/techniqueSlice'
import { useAppDispatch } from 'src/redux/hooks'
import { FORM_FILTER } from 'src/constants'
import { FormFilterCatalogType } from '.'

const { Panel } = Collapse

export type FormFilter = {
    max: number
    min: number
    model: string
    memory: string
    color: string
}

export const FormFilterCatalog = ({data}: FormFilterCatalogType) => {
    const dispatch = useAppDispatch()

    const onFinish = (values: FormFilter) => {
        console.log(values)
    }

    const onChange = (value: number | string) => {
        console.log(value);
    }

    const onChangeCheckBox = (e: CheckboxChangeEvent) => {
        console.log(e.target.value);
    }

    return (
        <div className="filter-catalog">
            <Form<FormFilter>
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Price"
                    name="price"
                >
                    <InputNumber defaultValue={0} onChange={onChange} />
                    <InputNumber defaultValue={100} onChange={onChange} />
                    <Slider defaultValue={0} max={1000} />
                </Form.Item>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="Model" key="1">
                        <Checkbox.Group>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="A" className="chtckbox-item" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MODEL.ITEM_FIRST}
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="B" className="chtckbox-item" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MODEL.ITEM_SECOND}
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="C" className="chtckbox-item" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MODEL.ITEM_THIRD}
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="D" className="chtckbox-item" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MODEL.ITEM_FOURTH}
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="E" className="chtckbox-item" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MODEL.ITEM_FIFTH}
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="I" className="chtckbox-item" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MODEL.ITEM_SIXTH}
                                    </Checkbox>
                                </Col>
                                <Col span={8} >
                                    <Checkbox value="K" className="chtckbox-item" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MODEL.ITEM_SEVENTH}
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Panel>
                    <Panel header="Memory size" key="2">
                        <Checkbox.Group>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="A" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MEMORY_SIZE.ITEM_FIRST}
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="B" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MEMORY_SIZE.ITEM_SECOND}
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="C" onChange={onChangeCheckBox}>
                                        {FORM_FILTER.ITEM_MEMORY_SIZE.ITEM_THIRD}
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Panel>
                    <Panel header="Color" key="3">
                        <Radio.Group name="radiogroup" defaultValue={1} className="radio-group">
                            <Radio
                                className="radio-item"
                                value={1}
                            >
                                {FORM_FILTER.ITEM_COLOR.ITEM_FIRST}
                            </Radio>
                            <Radio
                                className="radio-item"
                                value={2}
                            >
                                {FORM_FILTER.ITEM_COLOR.ITEM_SECOND}
                            </Radio>
                            <Radio
                                value={3}
                                className="radio-item"
                            >
                                {FORM_FILTER.ITEM_COLOR.ITEM_THIRD}
                            </Radio>
                            <Radio
                                value={4}
                                className="radio-item"
                            >
                                {FORM_FILTER.ITEM_COLOR.ITEM_FOURTH}
                            </Radio>
                            <Radio
                                value={5}
                                className="radio-item"
                            >
                                {FORM_FILTER.ITEM_COLOR.ITEM_FOURTH}
                            </Radio>
                        </Radio.Group>
                    </Panel>
                </Collapse>
            </Form>
        </div>
    )
}