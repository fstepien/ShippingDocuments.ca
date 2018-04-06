class ReactToPrint extends React.Component {

    
    static defaultProps = {
      copyStyles: true
    };
  
    triggerPrint(target) {
      if (this.props.onBeforePrint) {
        this.props.onBeforePrint();
      }
      setTimeout(() => {
        target.print();
        target.close();
      }, 500);
    }
  
    handlePrint = () => {
    
      const {
        content,
        copyStyles,
        onBeforePrint,
        onAfterPrint
      } = this.props;
  
      let printWindow = window.open("", "Print", "status=no, toolbar=no, scrollbars=yes", "false");
      
      if (onAfterPrint) {
        printWindow.onbeforeunload = onAfterPrint;
      }
  
      const contentEl = content();
      const contentNodes = findDOMNode(contentEl);
  
      const imageNodes = [...contentNodes.getElementsByTagName("img")];
      const linkNodes = document.querySelectorAll('link[rel="stylesheet"]');
  
      this.imageTotal = imageNodes.length;
      this.imageLoaded = 0;
  
      this.linkTotal = linkNodes.length;
      this.linkLoaded = 0;
  
      const markLoaded = (type) => {
  
        if (type === 'image')
          this.imageLoaded++;
        else if (type === 'link')
          this.linkLoaded++;
  
        if (this.imageLoaded === this.imageTotal && this.linkLoaded === this.linkTotal) {
          this.triggerPrint(printWindow);
        }
  
      };
  
      [...imageNodes].forEach((child) => {
        /** Workaround for Safari if the image has base64 data as a source */
        if (/^data:/.test(child.src)) {
          child.crossOrigin = 'anonymous';
        }
        child.setAttribute('src', child.src);
        child.onload = markLoaded.bind(null, 'image');
        child.onerror = markLoaded.bind(null, 'image');
        child.crossOrigin = 'use-credentials';
      });
  


  
      if (document.body.className) {
        const bodyClasses = document.body.className.split(" ");
        bodyClasses.map(item => printWindow.document.body.classList.add(item));
      }
  
      /* remove date/time from top */
      let styleEl = printWindow.document.createElement('style');
      styleEl.appendChild(printWindow.document.createTextNode("@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }"));
  
      printWindow.document.head.appendChild(styleEl);
      printWindow.document.body.innerHTML = contentNodes.outerHTML;
  
      if (this.imageTotal === 0 || copyStyles === false) {
        this.triggerPrint(printWindow);
      }
  
    }
