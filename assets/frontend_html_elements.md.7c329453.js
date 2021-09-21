import{o as t,c as a,b as n}from"./app.b2f90af8.js";const e='{"title":"Elements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Element examples","slug":"element-examples"}],"relativePath":"frontend/html/elements.md","lastUpdated":1632222340013}',s={},o=n('<h1 id="elements"><a class="header-anchor" href="#elements" aria-hidden="true">#</a> Elements</h1><p>HTML documents imply a structure of nested HTML elements. These are indicated in the document by HTML tags, enclosed in angle brackets. In the simple, general case, the extent of an element is indicated by a pair of tags: a &quot;start tag&quot; <code>&lt;p&gt;</code> and &quot;end tag&quot; <code>&lt;/p&gt;</code>. The text content of the element, if any, is placed between these tags.</p><p>Tags may also enclose further tag markup between the start and end, including a mixture of tags and text. This indicates further (nested) elements, as children of the parent element.</p><p>The start tag may also include element&#39;s attributes within the tag. These indicate other information, such as identifiers for sections within the document, identifiers used to bind style information to the presentation of the document, and for some tags such as the <code>&lt;img&gt;</code> used to embed images, the reference to the image resource in the format like this:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example.com/example.jpg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>Some elements, such as the line break <code>&lt;br&gt;</code>, or <code>&lt;br /&gt;</code> do not permit any embedded content, either text or further tags. These require only a single empty tag (akin to a start tag) and do not use an end tag.</p><p>Many tags, particularly the closing end tag for the very commonly used paragraph element <code>&lt;p&gt;</code>, are optional. An HTML browser or other agent can infer the closure for the end of an element from the context and the structural rules defined by the HTML standard. These rules are complex and not widely understood by most HTML coders.</p><p>The general form of an HTML element is therefore: <code>&lt;tag attribute1=&quot;value1&quot; attribute2=&quot;value2&quot;&gt;&#39;&#39;content&#39;&#39;&lt;/tag&gt;</code>. Some HTML elements are defined as empty elements and take the form <code>&lt;tag attribute1=&quot;value1&quot; attribute2=&quot;value2&quot;&gt;</code>. Empty elements may enclose no content, for instance, the <code>&lt;br&gt;</code> tag or the inline <code>&lt;img&gt;</code> tag. The name of an HTML element is the name used in the tags. Note that the end tag&#39;s name is preceded by a slash character, /, and that in empty elements the end tag is neither required nor allowed. If attributes are not mentioned, default values are used in each case.</p><h2 id="element-examples"><a class="header-anchor" href="#element-examples" aria-hidden="true">#</a> Element examples</h2><p>Header of the HTML document: <code>&lt;head&gt;...&lt;/head&gt;</code>. The title is included in the head, for example:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>The Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags with H1 being the highest (or most important) level and H6 the least:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Heading level 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Heading level 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Heading level 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>Heading level 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Heading level 5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">&gt;</span></span>Heading level 6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>Headings are used to create structure in an HTML document. We&#39;ll look at this some more in the semantic HTML section.</p>',14);s.render=function(n,e,s,p,l,c){return t(),a("div",null,[o])};export default s;export{e as __pageData};
