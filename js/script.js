// Simple JS to show interaction
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('clickMe');
  btn.addEventListener('click', function(){
    alert('Button clicked! Ye simple project structure ka demo hai.');
  });
});


const toggleBtn = document.getElementById('btn-toggle');
    const sidebar = document.querySelector('.panel-sidebar');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      document.body.classList.toggle('sidebar-open');
    });

    document.body.addEventListener('click', e => {
      if (e.target === document.body && document.body.classList.contains('sidebar-open')) {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
      }
    });

    // Menu active toggle (works with <a> inside .nav-item)
    const navList = document.getElementById('nav-list');

    navList.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-item a');
      if (!link) return; // ignore clicks outside links

      // Remove active from all
      document.querySelectorAll('.nav-item').forEach(li => li.classList.remove('active'));

      // Add active to clicked li
      link.parentElement.classList.add('active');

      // Close sidebar on mobile
      if (window.innerWidth <= 900) {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
      }
    });

    // User dropdown
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownWrapper = document.querySelector('.dropdown-wrapper');

    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownWrapper.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownWrapper.contains(e.target)) {
        dropdownWrapper.classList.remove('active');
      }
    });



    const customSelect = document.querySelector('.custom-select');
    const userBadge = customSelect.querySelector('.user-badge');
    const options = customSelect.querySelectorAll('.select-options li');

    userBadge.addEventListener('click', () => {
      customSelect.classList.toggle('active');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        const name = option.textContent.trim();
        const imgSrc = option.querySelector('img').src;
        userBadge.querySelector('span').textContent = name;
        userBadge.querySelector('.user-1').src = imgSrc;
        customSelect.classList.remove('active');
      });
    });

 document.querySelectorAll('.menu-dots').forEach(button => {
      button.addEventListener('click', (e) => {
        const popup = button.nextElementSibling;
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
      });
    });

    // Close popup if clicked outside
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.menu-popup').forEach(pp => {
        if (!pp.contains(e.target) && !pp.previousElementSibling.contains(e.target)) {
          pp.style.display = 'none';
        }
      });
    });


  