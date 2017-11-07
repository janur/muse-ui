export default {
  props: [{
    name: 'name',
    type: 'String',
    default: '',
    desc: 'props.name'
  }, {
    name: 'type',
    type: 'String',
    default: '',
    desc: 'props.type'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: 'props.icon'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.iconClass'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: 'props.label'
  }, {
    name: 'labelFloat',
    type: 'Boolean',
    default: 'false',
    desc: 'props.labelFloat'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelClass'
  }, {
    name: 'labelFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelFocusClass'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'hintText',
    type: 'String',
    default: '',
    desc: 'props.hintText'
  }, {
    name: 'hintTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.hintTextClass'
  }, {
    name: 'helpText',
    type: 'String',
    default: '',
    desc: 'props.helpText'
  }, {
    name: 'helpTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.helpTextClass'
  }, {
    name: 'errorText',
    type: 'String',
    default: '',
    desc: 'props.errorText'
  }, {
    name: 'errorColor',
    type: 'String',
    default: '',
    desc: 'props.errorColor'
  }, {
    name: 'fullWidth',
    type: 'Boolean',
    default: 'false',
    desc: 'props.fullWidth'
  }, {
    name: 'underlineShow',
    type: 'Boolean',
    default: 'true',
    desc: 'props.underlineShow'
  }, {
    name: 'underlineClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.underlineClass'
  }, {
    name: 'underlineFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.underlineFocusClass'
  }, {
    name: 'inputClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.inputClass'
  }, {
    name: 'multiLine',
    type: 'Boolean',
    default: 'false',
    desc: 'props.multiLine'
  }, {
    name: 'rows',
    type: 'Number',
    default: '1',
    desc: 'props.rows'
  }, {
    name: 'rowsMax',
    type: 'Number',
    default: '',
    desc: 'props.rowsMax'
  }, {
    name: 'maxLength',
    type: 'Number',
    default: '0',
    desc: 'props.maxLength'
  }, {
    name: 'value',
    type: 'String',
    default: '',
    desc: 'props.value'
  }, {
    name: 'max',
    type: 'String,Number',
    default: '',
    desc: 'props.max'
  }, {
    name: 'min',
    type: 'String,Number',
    default: '',
    desc: 'props.min'
  }, {
    name: 'required',
    type: 'Boolean',
    default: 'false',
    desc: 'props.required'
  }],
  events: [{
    name: 'focus',
    desc: 'events.focus'
  }, {
    name: 'blur',
    desc: 'events.blur'
  }, {
    name: 'input',
    desc: 'events.input'
  }, {
    name: 'change',
    desc: 'events.change'
  }, {
    name: 'keyup',
    desc: 'events.keyup'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }]
}
