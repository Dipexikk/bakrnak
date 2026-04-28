document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.site-btn');
    const preview = document.getElementById('preview-img');
    if (!buttons || !preview) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const src = btn.getAttribute('data-src');
            const alt = btn.getAttribute('data-alt') || '';
            // toggle: if same image is already shown, hide it
            if (preview.dataset.current === src) {
                preview.style.display = 'none';
                preview.removeAttribute('src');
                preview.removeAttribute('alt');
                delete preview.dataset.current;
                return;
            }

            // show selected image
            preview.src = src;
            preview.alt = alt;
            preview.dataset.current = src;
            preview.style.display = 'block';

            // smooth scroll to preview
            setTimeout(() => {
                preview.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 50);
        });
    });
});