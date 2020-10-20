export default {
    Elements: {
        Container: {
            parent: null,
            type: 'Container',
            id: 'container',
            classList: ["container"],
            tag:'Div'
        },
        ImageTemplate: {
            parent: null,
            type: 'ImageTemplate',
            id:'imageTemplate',
            classList: ["imageTemplate", "doted"],
            tag:'Div'    
        },
        ButtonTemplate: {
            parent: null,
            type: 'ButtonTemplate',
            id: 'buttonTemplate',
            classList: ["buttonTemplate"],
            tag:'button'
        },
        DescriptionTemplate: {
            parent: null,
            type: 'DescriptionTemplate',
            id: "descriptionTemplate",
            classList: ["descriptionTemplate","doted"],
            tag:'Div'
        },
       ImageTemplateChildImg: { 
            parent: null,
            id: 'Img',
            classList: ["imageTemplate"],
            tag:'img'
        },
        ImageTemplateChildP: {
            parent: null,
            id: 'ImgP',
            classList: ["center"],
            text: "Click to add picture...",
            tag: 'p'
        },
        ButtonTemplateChildStrong: {
            parent: null,
            id: 'Strong',
            classList: ["strong"],
            text: "Description ...",
            tag: 'strong'
        },
        DescriptionTemplateChildP: {
            parent: null,
            id: 'DescP',
            classList: ["center", "descriptionTemplate"],
            text: "Click to add description...",
            tag: 'p'
        }
    }
}
