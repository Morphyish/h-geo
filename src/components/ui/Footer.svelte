<script>
    const year = new Date().getFullYear()
</script>

<footer>
    <div>H.Geo ©2016-{year}</div>
    <div>Powered by Sapper</div>
</footer>

<style>
footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: .75rem;
    color: var(--font-color);
    margin-top: auto;
    padding: 1rem 2.5rem;
    opacity: .4;
    text-align: center;
}
@media (max-width: 599px) {
	footer {
        padding: 1rem 0;
	}
}
</style>
