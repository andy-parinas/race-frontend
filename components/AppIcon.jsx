export default defineComponent({
    props: ["icon", "class"],
    render: (props) => {
        return <props.icon class={props.class} />;
    },
});
