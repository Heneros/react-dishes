export async function getStaticProps() {
    const results = await fetch('asdf', {
        headers: {
            Authorization: 'https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload '
        }
    })
    return {
        props: {

        }
    }
}